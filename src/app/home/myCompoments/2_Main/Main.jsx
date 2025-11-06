import Image from "next/image";

import React from "react";
import "@/app/home/myCompoments/2_Main/Main.css";

export default function Main() {
  return (
    <div className="main">
      {/* Feed */}
      <div className="feed">
        <div className="feed-header">
          <button className="feed-for-you-button">For you</button>
          <div></div>
          <div className="feed-following-button">Following</div>
        </div>
        <div className="feed-input-post-container">
          <div className="feed-input-container">
            <div className="header-profile-image-container">
              <Image
                src="/images/profile-image.jpg"
                className="header-profile-image cursor-pointer "
                width={100}
                height={100}
                alt="x icon"
              />
            </div>
            <input
              placeholder="What's happening?"
              className="feed-input"
              type="text"
            />
          </div>
          {/* ---------------------------------------------------------- */}
          <div className="everyoneCanReplyContainer">
            <button className="everyOneCanReplyButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="GlobeImage "
                style={{ color: "rgb(29, 155, 240)" }}
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"
                  />
                </g>
              </svg>

              <span className="everyoneCanReplyText">Everyone can reply</span>
            </button>
          </div>
          {/* ---------------------------------------------------------- */}

          <div className="feed-post-container">
            <div className="feed-line"></div>
            <div className="feed-post-box">
              <div className="feed-post-left">
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="feed-post-option"
                    style={{ color: "rgb(29, 155, 240)" }}
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
                      />
                    </g>
                  </svg>

                  <div className=""></div>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="feed-post-option"
                    style={{ color: "rgb(29, 155, 240)" }}
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
                      />
                    </g>
                  </svg>

                  <div className=""></div>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    className="feed-post-option"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 32"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466" />
                    </g>
                  </svg>
                  <div className=""></div>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="feed-post-option"
                    style={{ color: "rgb(29, 155, 240)" }}
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
                      />
                    </g>
                  </svg>
                </button>
                <button className="feed-post-option-button earase453">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="feed-post-option"
                    style={{ color: "rgb(29, 155, 240)" }}
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
                      />
                    </g>
                  </svg>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="feed-post-option"
                    fill="currentColor"
                  >
                    <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" />
                  </svg>
                  <div className=""></div>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="feed-post-option"
                    fill="currentColor"
                  >
                    <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
                  </svg>
                  <div className=""></div>
                </button>
              </div>
              <div className="feed-post-right">
                <button className="post-btn">Post</button>
              </div>
            </div>
          </div>

          <div className="posted-box">
            <div className="posted-box-top">
              <div className="user-image-container">
                <div className="post-image"></div>
              </div>
              <div className="user-detail-container">
                <div className="user-detail-left">
                  <div className="user-detail">
                    <span className="user-name hover:underline ">
                      User Name
                    </span>
                    <span className="user-id">User Id · Time</span>
                  </div>
                  {/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */}
                  <div className="user-post">good</div>
                </div>
                <div className=" user-detail-right">
                  <button className="feed-post-option-button">
                    <svg
                      className="feed-post-option"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 32"
                      aria-hidden="true"
                    >
                      <g>
                        <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466" />
                      </g>
                    </svg>
                  </button>
                  <button className="feed-post-option-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="feed-post-option"
                    >
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="posted-box-bottom">
              <div className="posted-box-bottom-left">
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="feed-post-option"
                  >
                    <g>
                      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
                    </g>
                  </svg>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="feed-post-option"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
                  </svg>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="feed-post-option"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                  </svg>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="feed-post-option"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                  </svg>
                </button>
              </div>
              <div className="posted-box-bottom-right">
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="feed-post-option"
                  >
                    <g>
                      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                    </g>
                  </svg>
                </button>
                <button className="feed-post-option-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="feed-post-option"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ******************************************************** */}
      {/* Suggestions */}
      <div className="suggestions">
        <div className="suggestions-box">
          <div className="search-header">
            <input
              placeholder="Search"
              className="Suggestions-input"
              type="text"
            />
          </div>
          <div className="subscribe-container">
            <span className="suggestion-text1">Subscribe to Premimum</span>
            <span className="suggestion-text2">
              Subscribe to unlock new features and if eligible, receive a share
              of revenue.
            </span>
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="suggestion-line"></div>
          <div className="what-happening-container">
            <span className="suggestion-text1">What's happening</span>

            <div className="what-happening-box">
              <div className="what-happening-box-left">
                <span className="user-id suggestion-trending">
                  Entertainment · Trending
                </span>
                <span className="user-name">#User Name</span>
                <span className="user-id suggestion-trending">Total posts</span>
              </div>
              <div className="what-happening-box-right">
                <button className="suggestion-threedot-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="header-profile-threeDot"
                  >
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="what-happening-box">
              <div className="what-happening-box-left">
                <span className="user-id suggestion-trending">
                  Entertainment · Trending
                </span>
                <span className="user-name">#User Name</span>
                <span className="user-id suggestion-trending">Total posts</span>
              </div>
              <div className="what-happening-box-right">
                <button className="suggestion-threedot-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="header-profile-threeDot"
                  >
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="what-happening-box">
              <div className="what-happening-box-left">
                <span className="user-id suggestion-trending">
                  Entertainment · Trending
                </span>
                <span className="user-name">#User Name</span>
                <span className="user-id suggestion-trending">Total posts</span>
              </div>
              <div className="what-happening-box-right">
                <button className="suggestion-threedot-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="header-profile-threeDot"
                  >
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <button className="show-more"> Show more</button>
          </div>
          <div className="who-to-follow-container">
            <span className="suggestion-text1">Who to follow</span>
            <div className="who-to-follow-box">
              <div className="who-to-follow-box-left">
                <div className="header-profile-detail-image-container">
                  <Image
                    src="/images/profile-image.jpg"
                    className="header-profile-image "
                    width={100}
                    height={100}
                    alt="x icon"
                  />
                  <div className="header-profile-detail-container">
                    <span className="user-name hover:underline">User Name</span>
                    <span className="user-id">User Id</span>
                  </div>
                </div>
              </div>
              <div className="who-to-follow-box-right">
                <button className="who-to-follow-buttons">Follow</button>
              </div>
            </div>
            <div className="who-to-follow-box">
              <div className="who-to-follow-box-left">
                <div className="header-profile-detail-image-container">
                  <Image
                    src="/images/profile-image.jpg"
                    className="header-profile-image "
                    width={100}
                    height={100}
                    alt="x icon"
                  />
                  <div className="header-profile-detail-container">
                    <span className="user-name hover:underline ">
                      User Name
                    </span>
                    <span className="user-id">User Id</span>
                  </div>
                </div>
              </div>
              <div className="who-to-follow-box-right">
                <button className="who-to-follow-buttons">Follow</button>
              </div>
            </div>
            <div className="who-to-follow-box">
              <div className="who-to-follow-box-left">
                <div className="header-profile-detail-image-container">
                  <Image
                    src="/images/profile-image.jpg"
                    className="header-profile-image "
                    width={100}
                    height={100}
                    alt="x icon"
                  />
                  <div className="header-profile-detail-container">
                    <span className="user-name hover:underline">User Name</span>
                    <span className="user-id">User Id</span>
                  </div>
                </div>
              </div>
              <div className="who-to-follow-box-right">
                <button className="who-to-follow-buttons">Follow</button>
              </div>
            </div>
            <button className="show-more">Show more</button>
          </div>

          <div className="fotter-link-container">
            <div className="fotter-link-top">
              <span className="fotter-link-top-text cursor-pointer hover:underline">
                Terms of Service
              </span>
              |
              <span className="fotter-link-top-text cursor-pointer hover:underline">
                Privacy Policy
              </span>
              |
              <span className="fotter-link-top-text cursor-pointer hover:underline">
                Cookie Policy
              </span>
              |
            </div>
            <div className="fotter-link-bottom">
              <span className="fotter-link-top-text cursor-pointer hover:underline">
                Accessibility
              </span>
              |
              <span className="fotter-link-top-text cursor-pointer hover:underline">
                Ads info
              </span>
              |
              <span className="fotter-link-top-text cursor-pointer hover:underline">
                More···
              </span>
              © 2025 X Corp.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
