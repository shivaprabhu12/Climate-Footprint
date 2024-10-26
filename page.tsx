// "use client";

// import { useState, useEffect, useRef, FormEvent, use } from "react";
// import Home from ".";
// import News from "./news";
// type Message = {
//   id: number;
//   sender: "user" | "bot";
//   text: string;
// };

// const ChatPage = () => {
//   const [message, setMessage] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messageEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [message]);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = {
//       id: Date.now(),
//       sender: "user",
//       text: input.trim(),
//     };
//     console.log(userMessage);
//     setMessage((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: userMessage.text }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         const botMessage: Message = {
//           id: Date.now() + 1,
//           sender: "bot",
//           text: data.response,
//         };
//         setMessage((prev) => [...prev, botMessage]);
//       } else {
//         const errorMessage: Message = {
//           id: Date.now() + 1,
//           sender: "bot",
//           text: data.error || "Something went wrong",
//         };
//         setMessage((prev) => [...prev, errorMessage]);
//       }
//     } catch (error) {
//       console.error("Error fetching chat: ", error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: "An unexpected error occurred",
//       };
//       setMessage((prev) => [...prev, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//     <Home />
//     <div className="flex flex-col h-screen mt-5 mb-5 bg-slate-100">
//       {/* Header */}
//       <header className="shadow px-4 py-4">
//         <h1 className="text-2xl font-semibold text-gray-800">
//           Chat with Llama
//         </h1>
//       </header>

//       {/* Chat Box */}
//       <div className="flex-1 overflow-y-auto p-4">
//         {message.map((msg) => (
//           <div
//             key={msg.id + 1}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             } mb-4`}
//           >
//             <div
//               className={`rounded-lg px-4 py-2 max-w-xl ${
//                 msg.sender === "user"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="flex justify-start mb-4">
//             <div className="flex space-x-1"></div>
//             <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
//             <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></span>
//             <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-400"></span>
//           </div>
//         )}
//         <div ref={messageEndRef}></div>
//       </div>

//       {/* Input Form */}
//       <form onSubmit={handleSubmit} className="flex p-4 bg-white shadow">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)
//           }
          
//           placeholder="Type your message..."
//           className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
//           disabled={loading}
//         />
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none disabled:bg-blue-300"
//           disabled={loading}
//         >
//           {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path 
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3"
//           </svg> */}
//         </button>
//       </form>
//     </div>
//     <News />
//     <footer className="fixed bottom-5 right-5 flex flex-col items-end gap-4">
//         <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md">
//           <a href="/chat" aria-label="Chat">
//             <img src="/images/chat_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Chat Icon" width="30" height="30" />
//           </a>
//         </div>
//         <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md">
//           <a href="/news" aria-label="News">
//             <img src="/images/notifications_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="News Icon" width="30" height="30" />
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ChatPage;


// "use client";

// import { useState, useEffect, useRef, FormEvent, use } from "react";
// import Home from ".";
// import News from "./news";
// type Message = {
//   id: number;
//   sender: "user" | "bot";
//   text: string;
// };

// const ChatPage = () => {
//   const [message, setMessage] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messageEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [message]);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = {
//       id: Date.now(),
//       sender: "user",
//       text: input.trim(),
//     };
//     console.log(userMessage);
//     setMessage((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: userMessage.text }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         const botMessage: Message = {
//           id: Date.now() + 1,
//           sender: "bot",
//           text: data.response,
//         };
//         setMessage((prev) => [...prev, botMessage]);
//       } else {
//         const errorMessage: Message = {
//           id: Date.now() + 1,
//           sender: "bot",
//           text: data.error || "Something went wrong",
//         };
//         setMessage((prev) => [...prev, errorMessage]);
//       }
//     } catch (error) {
//       console.error("Error fetching chat: ", error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: "An unexpected error occurred",
//       };
//       setMessage((prev) => [...prev, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };


//   // State to control visibility of the sections
//   const [isOtherSectionsVisible, setIsOtherSectionsVisible] = useState(false);

//   // Function to toggle visibility
//   const toggleVisibility = () => setIsOtherSectionsVisible(!isOtherSectionsVisible);

//   return (
//     <div className="p-4">
//       {/* Default section that is always visible */}
//       <div className="p-4 border rounded shadow bg-gray-100 mb-4">
//         <Home />
//       </div>

//       {/* Button to toggle other sections */}
//       <button
//         onClick={toggleVisibility}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         {isOtherSectionsVisible ? <News /> : 
//         <div className="flex flex-col h-screen mt-5 mb-5 bg-slate-100">
//               {/* Header */}
//                <header className="shadow px-4 py-4">
//                  <h1 className="text-2xl font-semibold text-gray-800">
//                    Chat with Llama
//                  </h1>
//                </header>
        
//                {/* Chat Box */}
//                <div className="flex-1 overflow-y-auto p-4">
//                  {message.map((msg) => (
//                   <div
//                     key={msg.id + 1}
//                     className={`flex ${
//                       msg.sender === "user" ? "justify-end" : "justify-start"
//                     } mb-4`}
//                   >
//                     <div
//                       className={`rounded-lg px-4 py-2 max-w-xl ${
//                         msg.sender === "user"
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-200 text-gray-800"
//                       }`}
//                     >
//                       {msg.text}
//                     </div>
//                   </div>
//                 ))}
//                 {loading && (
//                   <div className="flex justify-start mb-4">
//                     <div className="flex space-x-1"></div>
//                     <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
//                     <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></span>
//                     <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-400"></span>
//                   </div>
//                 )}
//                 <div ref={messageEndRef}></div>
//               </div>
        
//               {/* Input Form */}
//               <form onSubmit={handleSubmit} className="flex p-4 bg-white shadow">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)
//                   }
                  
//                   placeholder="Type your message..."
//                   className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
//                   disabled={loading}
//                 />
//                 <button
//                   type="submit"
//                   className="mt-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none disabled:bg-blue-300"
//                   disabled={loading}
//                 >
//                   {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path 
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3"
//                   </svg> */}
//                 </button>
//               </form>
//             </div>}
//       </button>

//       {/* Sections to show or hide based on state */}
//       {isOtherSectionsVisible && (
//         <>
//           <div className="mt-4 p-4 border rounded shadow bg-gray-100">
//             <h2 className="text-lg font-semibold">Hidden Section 1</h2>
//             <p>This is the first hidden section.</p>
//           </div>
//           <div className="mt-4 p-4 border rounded shadow bg-gray-100">
//             <News />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


// export default ChatPage



"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Home from ".";
import News from "./news";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await response.json();

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: response.ok ? data.response : data.error || "Something went wrong",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chat:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "An unexpected error occurred",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // State to control visibility of the sections
  const [isOtherSectionsVisible, setIsOtherSectionsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => setIsOtherSectionsVisible(!isOtherSectionsVisible);

  return (
    <div className="p-4">
      {/* Default section that is always visible */}
      <div className="p-4 border rounded shadow bg-gray-100 mb-4">
        <Home />
      </div>

      {/* Button to toggle other sections */}
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isOtherSectionsVisible ? "Hide News Section" : "Show News Section"}
      </button>

      {/* Conditional rendering for sections */}
      {!isOtherSectionsVisible ? (
        <div className="flex flex-col h-screen mt-5 mb-5 bg-slate-100">
          {/* Header */}
          <header className="shadow px-4 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Chat with Llama</h1>
          </header>

          {/* Chat Box */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-xl ${
                    msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mb-4">
                <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></span>
                <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-400"></span>
              </div>
            )}
            <div ref={messageEndRef}></div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex p-4 bg-white shadow">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              className="ml-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none disabled:bg-blue-300"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-4 p-4 border rounded shadow bg-gray-100">
          <News />
        </div>
      )}
    </div>
  );
};

export default ChatPage;
