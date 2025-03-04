import { type Component, createSignal, Show } from "solid-js";
import styles from "./styles.module.css";

interface LiveBackgroundProps {
  videoPath: string;
  initialMuted?: boolean;
}

const LiveBackground: Component<LiveBackgroundProps> = (props) => {
  const [isMuted, setIsMuted] = createSignal(props.initialMuted ?? true);

  return (
    <Show when={props.videoPath} fallback={<div>404 - Video Not Found</div>}>
      <div class={styles["livebackground-container"]}>
        <video
          autoplay
          muted={isMuted()}
          loop
          id="bgVideo"
          class={styles["livebackground-container video"]}
        >
          <source src={props.videoPath} type="video/mp4" />
        </video>
        {/* <button onClick={() => setIsMuted(!isMuted())} class="video-control">
          {isMuted() ? "🔈" : 🔊"}
        </button> */}
      </div>
      <iframe
        width="100%"
        height="300"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1637473239&color=%23ff5500&auto_play=true&visual=true&loop=true"
      ></iframe>
    </Show>
  );
};

export default LiveBackground;
