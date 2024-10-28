import React, { useEffect } from "react";
import "./QnA_page.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "../components/Loader";
import Mobilestepper from "./Mobilestepper";
import { context } from "../context";

function QnA_page() {
  const answersEndRef = useRef(null);

  const [idea, setIdea] = useState("");
  const [startup, setStartup] = useState(false);
  const [brand, setBrand] = useState(false);

  const [buttonidea, setButtonidea] = useState("");
  const [buttonstartup, setButtonstartup] = useState("");
  const [buttonbrand, setButtonbrand] = useState("");

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [domain, setDomain] = useState({})
  const [loader, setLoader] = useState(false);

  const messages = { questions };

  const handleDownloadPdf = async () => {

  };

  let navigate = useNavigate();

  useEffect(() => {
    const cookies = Cookies.get("token");
    if (!cookies) {
      navigate("/login"); // Redirect to the ogin page if no token is found
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    answersEndRef.current?.scrollIntoView();
  }, [answers]);

  const addQuestions = (newQuestion) => {
    setQuestions((questions) => [...questions, newQuestion]);
  };

  const addAnswers = (newAnswer) => {
    setAnswers((answers) => [...answers, newAnswer]);
  };

  const ideaHandler = () => {
    addQuestions("business stage");
    addAnswers("Idea / Vision");
    setIdea(true);
    setButtonidea("1px solid #0060d0");
    setButtonstartup(false);
    setButtonbrand(false);
  };

  const startupHandler = () => {
    addQuestions("What is the stage of your business ?");
    addAnswers("Startup / Growth");
    setIdea(true);
    setButtonstartup("1px solid #0060d0");
    setButtonbrand(false);
    setButtonidea(false);
  };

  const brandHandler = () => {
    addQuestions("What is the stage of your business ?");
    addAnswers("Brand / Enterprise");
    setIdea(true);
    setButtonbrand("1px solid #0060d0");
    setButtonstartup(false);
    setButtonidea(false);
  };

  // For Question and Answer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);

  const influencer_ques = [
    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // question start
              "What is your business name?",
              1000,
              () => {
                addQuestions("business name");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter bussiness name"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q1
              "What is Your business description ?",
              1000,
              () => {
                addQuestions("business description");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="eg: Hotel/restaurant/online clothing store"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q2
              "Total Number of employees you have?",
              1000,
              () => {
                addQuestions("Number of employees");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter number of employee"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q3(radio)
              "What do you offer a product or service?",
              1000,
              () => {
                addQuestions("Do you offer a product or service?");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter product / services"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q4(radio)
              "How can customer get your product or service?",
              1000,
              () => {
                addQuestions("How can customer get your product or service?");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Online/ offline/ both"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q5
              "Where do you serve your customers?",
              1000,
              () => {
                addQuestions("Where do you serve your customers?");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Eg: India/ New york/London/Europe"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q8
              "What is your Product or Service Name?",
              1000,
              () => {
                addQuestions("Product or Service Name");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter some text here"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q9
              "Describe your Product or Service Description",
              1000,
              () => {
                addQuestions("Product or Service Description");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter some text here"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q12
              "What is your total Initial Investment",
              1000,
              () => {
                addQuestions("Total Initial Investment");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter amount"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q13
              "What is your expected revenue for first year?",
              1000,
              () => {
                addQuestions("Expected First Year Revenue");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter the business revenue "
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q14
              "How much do you expect your revenue to grow each year?",
              1000,
              () => {
                addQuestions(
                  "How much do you expect your revenue to grow each year?"
                );
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter expected revenue"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,

    <div className="row">
      <div className="bussiness">
        <div className="logo">
          <img src="./images/logo.png" alt=""></img>
        </div>
        <span>
          {" "}
          <TypeAnimation
            sequence={[
              // Influencer q15
              "what is your yearly business operations cost?",
              1000,
              () => {
                addQuestions("Yearly Business Operations Cost");
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{
              fontSize: "1.3rem",
              color: "#ececf1",
              flex: "1",
              textAlign: "center",
              gap: "10px",
            }}
          />
        </span>
        <div ref={answersEndRef} />
      </div>
      <div className="row" id="inputRow">
        <input
          type="text"
          className="input-field p-2"
          placeholder="Enter bussiness operations cost"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if ((event.target.value).trim() === "") {
                window.alert("Response can not be empty!")
                return
              }
              handleResponseSubmit(event.target.value);
              event.target.value = ""; // Clear input field
              event.target.style.display = "none"; // Hide input field
            }
          }}
        />
      </div>
    </div>,
  ];

  const handleResponseSubmit = (response) => {
    setUserResponses([...userResponses, response]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    addAnswers(response);
  };

  return (
    <>
      {loader ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="container">
          <div className="row mt-2">
            <div className="col-lg-9 col-md-8 col-12">
              <div className="blue">
                <section className="logo1">
                  <img src="./images/logo.png" alt=""></img>
                  <p>Ten-IdeaEngine</p>
                </section>
              </div>
              <div className="mydivider mt-5"></div>
              <div className="bussiness" style={{ padding: "32px 10px" }}>
                <div className="logo">
                  <img src="./images/logo.png" alt=""></img>
                </div>
                <span>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "What is the stage of your business ?",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={70}
                    style={{
                      fontSize: "1.3rem",
                      color: "#ececf1",
                      flex: "1",
                      textAlign: "center",
                      gap: "10px",
                    }}
                  />
                </span>
              </div>
            </div>

            <div className="row qna-box">
              <div className="col-lg-4 col-md-6 col-12" onClick={ideaHandler}>
                <div className="qna-border" style={{ border: buttonidea }}>
                  <img src="./images/stage_idea.png" alt=""></img>
                  <div className="mydivider mt-4"></div>
                  <p className="qna-text">Idea / Vision</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12"
                onClick={startupHandler}
              >
                <div className="qna-border" style={{ border: buttonstartup }}>
                  <img src="./images/stage_startup.png" alt=""></img>
                  <div className="mydivider mt-4"></div>
                  <p className="qna-text">Startup / Growth</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12" onClick={brandHandler}>
                <div className="qna-border" style={{ border: buttonbrand }}>
                  <img src="./images/stage_brand.png" alt=""></img>
                  <div className="mydivider mt-4"></div>
                  <p className="qna-text">Brand / Enterprise</p>
                </div>
              </div>
            </div>
            <div ref={answersEndRef} />
          </div>

          {/* Idea / Vision */}
          {idea && (
            <div className="row">
              <div className=" input--field p-3" style={{ color: "white", textAlign: "initial" }} >
                {currentQuestionIndex < influencer_ques.length ? (
                  <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                    <p>{influencer_ques[currentQuestionIndex]}</p>
                    {userResponses.map((response, index) => (
                      <div key={index}>
                        <div className="res">
                          <p>
                            <strong>Response:</strong> {response}
                          </p>
                          <div ref={answersEndRef} />
                        </div>

                        {index < influencer_ques.length - 1 && (
                          <p>
                            <strong></strong> {influencer_ques[index + 1]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )
                  : (
                    <div>
                      <div>
                        <context.Provider value={{ questions, setQuestions, addQuestions, answers, setAnswers, addAnswers, messages, domain, setDomain }}>
                          <Mobilestepper />
                        </context.Provider>
                      </div>
                    </div>
                  )}
              </div>
              <div ref={answersEndRef} />
            </div>
          )}

          <footer className="container mt-5">
            <div className="bottom-position">
              <p className="bottom-text" style={{ textAlign: '-webkit-center' }}>
                **A PDF will be generated once all the questions has been
                completed.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
export default QnA_page;