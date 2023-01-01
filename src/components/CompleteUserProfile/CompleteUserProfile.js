import React, { useRef, useEffect, useState } from "react";
import classes from "./CompleteUserProfile.module.css";
import { BsGithub, BsGlobe } from "react-icons/bs";
import {useSelector} from 'react-redux'

const CompleteUserProfile = (props) => {
  const fullNameRef = useRef("");
  const urlRef = useRef("");
  const idToken = useSelector(state => state.auth.idToken)

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUoFU3mZ5m6E_aZRTyscL7wT_D0ImQ6QM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log("useEffect", ...data.users);
        setUser(...data.users);
      })
      .catch((err) => {
        alert(err);
      });
  }, [idToken]);

  const updateProfileHandler = (event) => {
    event.preventDefault();
    if (!user.displayName) {
      const enteredFullName = fullNameRef.current.value;
      const enteredUrl = urlRef.current.value;
      //console.log(enteredFullName,enteredUrl, idToken)
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUoFU3mZ5m6E_aZRTyscL7wT_D0ImQ6QM",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
            displayName: enteredFullName,
            photoUrl: enteredUrl,
            deleteAttribute: null,
            //returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              throw new Error(data.error.message);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      const enteredFullName = fullNameRef.current.value;
      const enteredUrl = urlRef.current.value;
      //console.log(enteredFullName,enteredUrl, idToken)
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUoFU3mZ5m6E_aZRTyscL7wT_D0ImQ6QM",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
            displayName: enteredFullName,
            photoUrl: enteredUrl,
            deleteAttribute: null,
            //returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              throw new Error(data.error.message);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <section className={classes['complete-user-profile']}>
        <h2>Contact Details</h2>
      <form onSubmit={updateProfileHandler}>
          <BsGithub size={25} />
          <label htmlFor="name">Full Name: </label>
          <input
            autoComplete="on"
            id="name"
            name="name"
            type="text"
            required
            ref={fullNameRef}
          />
          <BsGlobe size={25} />
          <label htmlFor="url">Profile Photo URL: </label>
          <input
            autoComplete="on"
            id="url"
            name="url"
            type="url"
            //defaultValue={user.photoUrl}
            required
            ref={urlRef}
          />
        <button>Update</button>
      </form>
    </section>
  );
};

export default CompleteUserProfile;
