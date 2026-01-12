"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@/app/home/myCompoments/2_Main/Main.css";
import "@/app/home/myCompoments/2_Main/delete-edit-modal.css";
import "@/app/home/myCompoments/2_Main/edit-modal.css";

import { stringifyError } from "next/dist/shared/lib/utils";

export default function Main() {
  // store value
  const [value, setValue] = useState([]);

  // input value
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  // check backend data exist

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api", {
        method: "GET",
      });

      const result = await response.json();
      console.log(result);

      if (result.store.length === 0) {
        console.log("not found");
      } else {
        console.log("found");

        setValue(result.store);
      }
    };
    fetchData();
  }, []);

  // add value
  const addValue = async () => {
    console.log(inputValue);
    if (!inputValue.trim()) {
      return;
    }

    // storing value
    const copyValue = [inputValue, ...value];
    setValue(copyValue);

    // sending data backend
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ add: inputValue }),
    });
    setInputValue("");

    const result = response.json();
    console.log(result);
  };

  // delete
  const [valueToBeDeleted, setValueToBeDeleted] = useState();
  const deleteBtn = async () => {
    await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ delete: valueToBeDeleted }),
    });

    const copyValue = value.filter((el, index, arr) => {
      if (index !== valueToBeDeleted) {
        return true;
      } else {
        return false;
      }
    });
    setValue(copyValue);

    ShowdeleteEditModal();
  };

  // show Everyone can reply
  const [everyoneCanReply, SertEveryoneCanReply] = useState(false);
  const everyoneCanReplyModal = () => {
    SertEveryoneCanReply(!everyoneCanReply);
  };
  // show deleteEditModal
  const [deleteEditModal, setDeleteEditModal] = useState(false);
  const ShowdeleteEditModal = () => {
    setDeleteEditModal(!deleteEditModal);
  };

  // client X and Y
  let [clientX, setClientX] = useState([]);
  let [clientY, setClientY] = useState([]);

  // show editModal
  const [editModal, setEditModal] = useState(false);
  const showEditModal = () => {
    setEditModal(!editModal);
  };

  // input edit value
  const [inputEditValue, setInputEditValue] = useState("");
  const inputEditHandler = (e) => {
    setInputEditValue(e.target.value);
  };

  const [valueToBeEdited, setValueToBeEdited] = useState();

  // update button

  const editButton = async () => {
    if (!inputEditValue.trim()) {
      return;
    }
    console.log(inputEditValue);
    console.log(valueToBeEdited);

    let copyValue = [...data];
    copyValue = value.map((el, index, arr) => {
      if (index === valueToBeEdited) {
        return inputEditValue;
      }
      return el;
    });
    setValue(copyValue);

    showEditModal();

    await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        editValue: inputEditValue,
        oldValue: valueToBeEdited,
      }),
    });
    setInputEditValue("");
  };

  return (
    <div className="main">
      {editModal ? (
        <div className="">
          <div
            onClick={() => {
              showEditModal();
              setInputEditValue("");
            }}
            className="edit-cover-model"
          ></div>
          <div className="edit-modal">
            <div className="edit-modal-header">
              <button onClick={showEditModal} className="close-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="close-image"
                  style={{ color: "rgb(239, 243, 244)" }}
                  data-label="svg.r-4qtqp9"
                >
                  <g>
                    <path
                      d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                      className=""
                    />
                  </g>
                </svg>

                <div className=""></div>
              </button>
            </div>
            <div className="edit-input-container">
              <div className="user-image-container edit-input-image-container">
                <Image
                  src="/images/profile-image.jpg"
                  className="post-image "
                  width={100}
                  height={100}
                  alt="x icon"
                />
              </div>
              <textarea
                placeholder="What's happening?"
                onChange={inputEditHandler}
                value={inputEditValue}
                className="edit-input"
                name=""
                id=""
              ></textarea>
            </div>
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
            <div className="feed-line edit-line"></div>

            <div className="feed-post-container edit-post-container">
              <div className="feed-post-box  edit-post-box">
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
                      style={{ fill: "rgb(29, 155, 240)" }}
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
                  <button className="feed-post-option-button earase490">
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
                  <button className="feed-post-option-button earase455">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="feed-post-option"
                      style={{ fill: "rgb(29, 155, 240)" }}
                    >
                      <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" />
                    </svg>
                    <div className=""></div>
                  </button>
                  <button className="feed-post-option-button earase400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="feed-post-option"
                      style={{ fill: "rgb(29, 155, 240)" }}
                    >
                      <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
                    </svg>
                    <div className=""></div>
                  </button>
                </div>
                <div className="feed-post-right">
                  <button
                    onClick={() => {
                      editButton();
                    }}
                    className="post-btn"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Feed */}
      <div className="feed">
        <div className="feed-home">Home</div>
        <div className="feed-header">
          <div className="feed-header-container"></div>
          <div className="feed-header-home "></div>
          {/* <button className="feed-for-you-button">
            <span className="">For you</span>
          </button> */}
          <button className="feed-for-you-button relative flex flex-col items-center">
            <span className="feed-for-you-text bg-blue text-white font-semibold">
              For you
            </span>
            <span className="feed-for-you-line block w-13 h-1 bg-blue-500 mt-2 rounded-full absolute bottom-[0px]"></span>
          </button>

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
            {/* input */}
            <input
              onClick={() => {
                SertEveryoneCanReply(true);
              }}
              placeholder="What's happening?"
              className="feed-input"
              type="text"
              value={inputValue}
              onChange={inputHandler}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // ✅ important
                  addValue(); // ✅ POST
                }
              }}
            />
          </div>

          {/* show everyoneCanReply  */}
          {everyoneCanReply ? (
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
          ) : null}

          <div className="feed-post-container">
            {everyoneCanReply ? <div className="feed-line"></div> : null}

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
                    style={{ fill: "rgb(29, 155, 240)" }}
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
                <button className="feed-post-option-button earase490">
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
                <button className="feed-post-option-button earase455">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="feed-post-option"
                    style={{ fill: "rgb(29, 155, 240)" }}
                  >
                    <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" />
                  </svg>
                  <div className=""></div>
                </button>
                <button className="feed-post-option-button earase400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="feed-post-option"
                    style={{ fill: "rgb(29, 155, 240)" }}
                  >
                    <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
                  </svg>
                  <div className=""></div>
                </button>
              </div>
              <div className="feed-post-right">
                {/* add value */}
                <button onClick={addValue} className="post-btn">
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Posted div */}
          {/* ---------------------------------------------------------- */}

          {value.map((el, index, arr) => {
            return (
              <div key={index} className="posted-box">
                <div className="posted-box-top">
                  <div className="user-image-container">
                    {/* <div className="post-image"></div> */}
                    <Image
                      src="/images/profile-image.jpg"
                      className="post-image "
                      width={100}
                      height={100}
                      alt="x icon"
                    />
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
                      <div className="user-post">{el}</div>
                    </div>
                    <div className=" user-detail-right">
                      <button className="feed-post-option-button feed-post-option-button1">
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
                      <div className="feed-post-option-button1">
                        {deleteEditModal ? (
                          <div className="">
                            <div
                              onClick={() => {
                                ShowdeleteEditModal();
                              }}
                              className="delete-edit-modal-cover"
                            ></div>
                            <div
                              className="delete-edit-modal"
                              style={{
                                top: clientY + window.scrollY - 10,
                                left:
                                  window.innerWidth <= 900
                                    ? clientX - 230 - 75 // 👈 very small screens
                                    : window.innerWidth <= 1017
                                    ? clientX - 230 - 100 // 👈 medium screens
                                    : clientX - 230, // 👈 large screens
                              }}
                            >
                              <button
                                onClick={() => {
                                  deleteBtn();
                                }}
                                className="modal-button delete-button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image red"
                                >
                                  <g>
                                    <path
                                      d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"
                                      className="st-current"
                                      data-label="path"
                                    />
                                  </g>
                                </svg>

                                <span className="red ">Delete</span>
                              </button>
                              {/* Edit button */}
                              <button
                                onClick={() => {
                                  showEditModal();
                                  ShowdeleteEditModal();
                                }}
                                className="modal-button "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <g>
                                    <path
                                      d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z"
                                      className="st-current"
                                    />
                                  </g>
                                </svg>

                                <span className="">Edit</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <g>
                                    <path
                                      d="M17 9.76V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5v5.26L3.88 16H11v5l1 2 1-2v-5h7.12L17 9.76zM7.12 14L9 10.24V4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5.74L16.88 14H7.12z"
                                      className="st-current"
                                    />
                                  </g>
                                </svg>

                                <span className="">Pin to your peofile</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z" />
                                </svg>

                                <span className="">
                                  Highlight on your profile
                                </span>
                              </button>

                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
                                </svg>

                                <span className="">Add/remove from Lists</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
                                </svg>

                                <span className="">Change who can reply</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                                </svg>

                                <span className="">Veiw post engagements</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z" />
                                </svg>

                                <span className="">Embed post</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                                </svg>
                                <span className="">View post analytics</span>
                              </button>
                              <button className="modal-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="modal-button-image"
                                >
                                  <path d="M22 2.63v17.74l-7.05-2.27c-.29 1.65-1.72 2.9-3.45 2.9C9.57 21 8 19.43 8 17.5v-1.63l-1.15-.37H4.5C3.12 15.5 2 14.38 2 13v-3c0-1.38 1.12-2.5 2.5-2.5h2.35L22 2.63zM6 9.5H4.5c-.27 0-.5.22-.5.5v3c0 .28.23.5.5.5H6v-4zm2 4.27l12 3.86V5.37L8 9.23v4.54zm2 2.74v.99c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.02l-3-.97z" />
                                </svg>

                                <span className="">Request Community Note</span>
                              </button>
                            </div>
                          </div>
                        ) : null}
                        <button
                          onClick={(e) => {
                            // console.log("X:", e.clientX, "Y:", e.clientY);
                            // ShowdeleteEditModal();
                            // setClientX(e.clientX);
                            // setClientY(e.clientY);

                            // Get the bounding box of the button
                            const rect =
                              e.currentTarget.getBoundingClientRect();

                            // Calculate center X and Y
                            const centerX = rect.left + rect.width / 2;
                            const centerY = rect.top + rect.height / 2;

                            // console.log(
                            //   "Button center X:",
                            //   centerX,
                            //   "Y:",
                            //   centerY
                            // );

                            ShowdeleteEditModal();
                            setClientX(centerX);
                            setClientY(centerY);

                            setValueToBeDeleted(index);

                            setValueToBeEdited(index);
                          }}
                          className="feed-post-option-button feed-post-option-button1 "
                        >
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
                    <button className="feed-post-option-button greenButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="feed-post-option green"
                      >
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
                      </svg>
                    </button>
                    <button className="feed-post-option-button pinkButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="feed-post-option pink"
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
            );
          })}
          {/* ---------------------------------------------------------- */}
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
