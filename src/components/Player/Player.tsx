"use client";
import React from "react";
import Image from "next/image";
import {
  RiMore2Fill,
  RiPauseFill,
  RiPlayFill,
  RiPlayListAddFill,
  RiRepeat2Fill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
  RiVolumeDownFill,
} from "react-icons/ri";
import { IMusic } from "@/api/apiHandle";

type Props = {
  songs: IMusic | undefined;
};

const Player = ({ songs }: Props) => {
  const [volume, setVolume] = React.useState(0.5);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [durationTime, setDurationTime] = React.useState(0);
  const [progressValue, setProgressValue] = React.useState(0);
  const [stepProgressValue, setStepProgressValue] = React.useState(0);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const playBtnRef = React.useRef<HTMLButtonElement>(null);
  const pauseBtnRef = React.useRef<HTMLButtonElement>(null);
  const volumeWrapperRef = React.useRef<HTMLDivElement>(null);
  const volumeRef = React.useRef<HTMLInputElement>(null);
  const progressBarRef = React.useRef<HTMLProgressElement>(null);
  const progressSliderRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (audioRef.current?.paused) {
      handlePause();
    }

    if (!audioRef.current?.paused && audioRef.current) {
      if (progressSliderRef.current) {
        progressSliderRef.current.value = `${progressValue}`;
      }
      setProgressValue(currentTime * (1 / audioRef.current.duration));
    }
  });

  React.useEffect(() => {
    handleDuration();
    if (audioRef.current) {
      setStepProgressValue(1 / audioRef.current?.duration);
    }
    console.log(stepProgressValue);
  }, []);

  const handlePause = () => {
    audioRef.current?.pause();
    if (pauseBtnRef.current !== null && playBtnRef.current !== null) {
      pauseBtnRef.current.style.display = "none";
      playBtnRef.current.style.display = "block";
    }
  };

  const handlePlay = () => {
    audioRef.current?.play();
    if (pauseBtnRef.current !== null && playBtnRef.current !== null) {
      playBtnRef.current.style.display = "none";
      pauseBtnRef.current.style.display = "block";
    }
  };

  const handleVolume = () => {
    const currentVolume = Number(volumeRef.current?.value);
    setVolume(currentVolume);
    if (audioRef.current) {
      audioRef.current.volume = currentVolume;
    }
  };

  const handleRenderVolume = () => {
    if (volumeWrapperRef.current) {
      if (volumeWrapperRef.current.style.display === "none") {
        volumeWrapperRef.current.style.display = "block";
      } else volumeWrapperRef.current.style.display = "none";
    }
  };

  const handleProgressSlider = () => {
    if (progressSliderRef.current && audioRef.current) {
      setProgressValue(Number(progressSliderRef.current.value));
      audioRef.current.currentTime =
        durationTime * Number(progressSliderRef.current.value);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleDuration = () => {
    if (audioRef.current) setDurationTime(audioRef.current.duration);
    console.log(durationTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="player_wrapper">
      <div className="player_container">
        <div className="player">
          <audio
            className="player_audio"
            src={songs?.audio}
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onDurationChange={handleDuration}
          ></audio>

          <div className="player_progress">
            <progress className="progress_bar_static" value={1}></progress>
            <progress
              className="progress_bar_played"
              value={progressValue}
              ref={progressBarRef}
            ></progress>
            <input
              type="range"
              className="progress_bar_slider"
              min={0}
              max={1}
              step={stepProgressValue}
              ref={progressSliderRef}
              onChange={handleProgressSlider}
            ></input>
          </div>
          <div className="player_info">
            <div className="player_info_image">
              <Image
                src={
                  songs?.image ||
                  "https://firebasestorage.googleapis.com/v0/b/musiclistener-82a42.appspot.com/o/images%2Favt_noinaycoanh.jfif?alt=media&token=27597dad-65b9-4666-b7c7-38d5ee3d018a"
                }
                alt="img_player"
                width={72}
                height={72}
              />
            </div>
            <div className="player_info_content">
              <div className="info_content_title">
                {songs?.name || "Nơi này có anh"}
              </div>
              <div className="info_content_subtitle">
                {songs?.singer || "Sơn Tùng MTP"}
              </div>
            </div>
          </div>
          <div className="player_control">
            <button className="player_btn amplitude_repeat btn_mini mr24">
              <RiRepeat2Fill />
            </button>
            <button className="player_btn amplitude_prev btn_nor">
              <RiSkipBackFill />
            </button>
            <button
              className="player_btn amplitude_pause btn_nor rounded d-block"
              onClick={handlePlay}
              ref={playBtnRef}
            >
              <RiPlayFill />
            </button>
            <button
              className="player_btn amplitude_play btn_nor rounded d-none"
              onClick={handlePause}
              ref={pauseBtnRef}
            >
              <RiPauseFill />
            </button>
            <button className="player_btn amplitude_next btn_nor">
              <RiSkipForwardFill />
            </button>
            <button className="player_btn amplitude_shuffle btn_mini ml24">
              <RiShuffleFill />
            </button>
          </div>
          <div className="player_action">
            <div className="player_action_time mr24">{`${formatTime(
              currentTime
            )} / ${formatTime(durationTime)}`}</div>
            <button
              className="player_btn amplitude_volume btn_mini"
              onClick={handleRenderVolume}
            >
              <RiVolumeDownFill />
              <div className="amplitude_volume_dropbox" ref={volumeWrapperRef}>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={handleVolume}
                  className="volume_dropbox_input"
                  ref={volumeRef}
                ></input>
              </div>
            </button>
            <button className="player_btn amplitude_more btn_mini">
              <RiMore2Fill />
            </button>
            <button className="player_btn amplitude_add btn_mini">
              <RiPlayListAddFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
