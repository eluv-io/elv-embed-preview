import React, {useState} from "react";
import embedItems from "../static/embedUrls.json";
import Tile from "Components/common/Tile";
import {observer} from "mobx-react";
import Dialog from "Components/common/Dialog";

const PlayerDialog = ({videoUrl, setVideoUrl, open, setOpen}) => {

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setVideoUrl("");
        setOpen(false);
      }}
      size="LG"
    >
      <iframe
        allow="autoplay"
        loading="lazy"
        className="player"
        src={videoUrl}
        width="100%"
        height="800px"
        frameBorder="0"
        allowFullScreen={true}
        type="text/html"
      />
    </Dialog>
  );
};

const Grid = observer(() => {
  const [videoUrl, setVideoUrl] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="grid">
      <h1>Eluvio Embed Preview</h1>
      <div className="grid__items">
        {
          (embedItems || []).items.map(({url, title}) => (
            <Tile
              key={url}
              title={title}
              // href={url}
              description={url}
              OnClick={() => {
                setVideoUrl(url);
                setOpen(true);
              }}
            />
          ))
        }
      </div>
      <PlayerDialog open={open} videoUrl={videoUrl} setVideoUrl={setVideoUrl} setOpen={setOpen} />
    </div>
  );
});

export default Grid;
