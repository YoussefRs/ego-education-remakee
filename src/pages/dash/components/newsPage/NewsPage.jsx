import React, { useState } from "react";
import "./styles.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "react-bootstrap";

const NewsPage = () => {
  const news = [
    {
      title: "News 1",
      content: "This is the content of news 1",
      pic: "https://picsum.photos/400/250",
      addedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "News 2",
      content: "This is the content of news 2",
      pic: "https://picsum.photos/400/251",
      addedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "News 3",
      content: "This is the content of news 1",
      pic: "https://picsum.photos/400/250",
      addedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "News 4",
      content: "This is the content of news 2",
      pic: "https://picsum.photos/400/251",
      addedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "News 5",
      content: "This is the content of news 1",
      pic: "https://picsum.photos/400/250",
      addedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "News 6",
      content: "This is the content of news 2",
      pic: "https://picsum.photos/400/251",
      addedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  ];

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote"],
    ["link"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    // [{ script: "sub" }, { script: "super" }],
    // [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const [showEditModal, setShowEditModal] = useState(false);
  const [newToEdit, setNewToEdit] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newToAdd, setNewToAdd] = useState({
    title: "",
    content: "",
    pic: "",
  });

  return (
    <div className="__dashboard_news_page">
      <div className="__header">
        <span>News ({news.length}):</span>
        <div className="__add_btn" onClick={() => setShowAddModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
          <span>Add article</span>
        </div>
      </div>
      <div className="__content">
        {news.map((item, index) => (
          <div key={index} className="__news_item">
            <div className="__pic">
              <img src={item.pic} alt={item.title} />
            </div>
            <div className="__details">
              <div className="__title">
                <span>{item.title}</span>
              </div>
              <div className="__date">
                <span>{item.addedAt}</span>
              </div>
            </div>
            <div className="__buttons">
              <div className="__prev_btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    fill="#ffffff"
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </div>
              <div
                className="__edit_btn"
                onClick={() => {
                  setNewToEdit(item);
                  setShowEditModal(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#ffffff"
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        size="lg"
        centered
        className="__edit_new_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="__group">
            <div className="__label">
              <span>News Title:</span>
            </div>
            <input
              type="text"
              name="title"
              value={newToEdit?.title}
              onChange={(e) =>
                setNewToEdit((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div
            className="__pic_box"
            style={{ backgroundImage: `url(${newToEdit?.pic})` }}
          >
            <div className="__change_btn">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="fileInput"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setNewToEdit((prevState) => ({
                        ...prevState,
                        pic: event.target.result, // Update pic with the data URL
                      }));
                    };
                    reader.readAsDataURL(file); // Convert file to data URL
                  }
                }}
              />
              <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#ffffff"
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                  />
                </svg>
                <span>Change picture</span>
              </label>
            </div>
          </div>
          <div className="__group">
            <div className="__label">News Content:</div>
            <ReactQuill
              className="create_code_editor"
              value={newToEdit?.content}
              modules={{ toolbar: toolbarOptions }}
              onChange={(e) => {
                setNewToEdit((prevState) => ({
                  ...prevState,
                  content: e,
                }));
              }}
            />
          </div>
          <div className="__buttons">
            <div
              className="__cancel_btn"
              onClick={() => {
                setShowEditModal(false);
                setNewToEdit(null);
              }}
            >
              Cancel
            </div>
            <div className="__edit_btn">Edit</div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        size="lg"
        centered
        className="__edit_new_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="__group">
            <div className="__label">
              <span>News Title:</span>
            </div>
            <input
              type="text"
              name="title"
              value={newToAdd?.title}
              onChange={(e) =>
                setNewToAdd((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div
            className="__pic_box"
            style={{ backgroundImage: `url(${newToAdd?.pic})` }}
          >
            <div className="__change_btn">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="fileInput"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setNewToAdd((prevState) => ({
                        ...prevState,
                        pic: event.target.result, // Update pic with the data URL
                      }));
                    };
                    reader.readAsDataURL(file); // Convert file to data URL
                  }
                }}
              />
              <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#ffffff"
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                  />
                </svg>
                <span>Choose picture</span>
              </label>
            </div>
          </div>
          <div className="__group">
            <div className="__label">News Content:</div>
            <ReactQuill
              className="create_code_editor"
              value={newToAdd?.content}
              modules={{ toolbar: toolbarOptions }}
              onChange={(e) => {
                setNewToAdd((prevState) => ({
                  ...prevState,
                  content: e,
                }));
              }}
            />
          </div>
          <div className="__buttons">
            <div
              className="__cancel_btn"
              onClick={() => {
                setShowAddModal(false);
                setNewToAdd({
                  title: "",
                  content: "",
                  pic: "",
                });
              }}
            >
              Cancel
            </div>
            <div className="__edit_btn">Submit</div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewsPage;
