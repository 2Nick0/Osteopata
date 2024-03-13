const VideoGallery = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7tOwWhfDA94"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        style={{ marginBottom: 20 }}
      />
    </div>
  );
};

export default VideoGallery;
