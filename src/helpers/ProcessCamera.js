let currentFacingMode = "user";

export const startCamera = async (webcamRef, mediaStream, setCameraActive) => {
  mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  const video = webcamRef.current?.video;
  setCameraActive(true);
  console.log("Actived");
  if (video) {
    video.srcObject = mediaStream;
  }
};

export const stopCamera = (
  webcamRef,
  mediaStream,
  setCameraActive,
  setMirrorState
) => {
  const video = webcamRef.current?.video;
  if (video) {
    const tracks = video.srcObject?.getTracks();
    tracks?.forEach((track) => track.stop());
    video.srcObject = null;
    mediaStream = null;
    setCameraActive(false);
    currentFacingMode = "user";
    setMirrorState(true);
    console.log("Stoped");
  }
};

export const switchCamera = async (
  webcamRef,
  mediaStream,
  mirrorState,
  setMirrorState,
) => {
  const video = webcamRef.current?.video;

  if (video) {
    video.srcObject.getTracks()?.forEach((track) => track.stop());
    video.srcObject = null;

    currentFacingMode = currentFacingMode == "user" ? "environment" : "user";

    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: currentFacingMode },
      });

      setMirrorState(!mirrorState);
      video.srcObject = mediaStream;
    } catch (error) {
      console.log("Error to change the Camera:", error);
    }
  }
};
