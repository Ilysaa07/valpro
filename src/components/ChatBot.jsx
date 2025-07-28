import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  Bot,
  X,
  Minimize2,
  Maximize2,
  User,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { services } from "../data/servicesData";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "👋 Halo! Saya asisten virtual Anda. Ada yang bisa saya bantu hari ini?",
      timestamp: new Date(),
      id: 1,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    const allQuestions = services.flatMap(
      (service) => service.faq?.map((faq) => faq.q) || []
    );
    const randomSuggestions = allQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setSuggestions(randomSuggestions);
  }, []);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMsg = {
      from: "user",
      text: text.trim(),
      timestamp: new Date(),
      id: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotReply(text);
      const botMsg = {
        from: "bot",
        text: botReply,
        timestamp: new Date(),
        id: Date.now() + 1,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotReply = (question) => {
    const qLower = question.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const service of services) {
      for (const faq of service.faq || []) {
        const faqLower = faq.q.toLowerCase();
        const words = qLower.split(" ");
        let score = 0;
        words.forEach((word) => {
          if (faqLower.includes(word)) {
            score += word.length;
          }
        });
        if (faqLower.includes(qLower)) {
          score += qLower.length * 2;
        }

        if (score > bestScore) {
          bestScore = score;
          bestMatch = {
            answer: faq.a,
            service: service.title,
          };
        }
      }
    }

    if (bestMatch && bestScore > 2) {
      return `${bestMatch.answer}\n\n📋 *Layanan: ${bestMatch.service}*\n\nAda pertanyaan lain yang bisa saya bantu?`;
    }

    const fallbackResponses = [
      <>
        Maaf, saya belum memahami pertanyaan Anda. Bisa dijelaskan lebih detail?
        🤔 Jika butuh bantuan cepat,{" "}
        <a
          href="https://wa.me/6281399710085"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          hubungi kami via WhatsApp
        </a>
        .
      </>,
      <>
        Pertanyaan yang menarik! Silakan{" "}
        <a
          href="https://wa.me/6281399710085"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          hubungi tim kami via WhatsApp
        </a>{" "}
        untuk penjelasan lebih lanjut. 📞
      </>,
      <>
        Saya akan meneruskan pertanyaan Anda ke tim ahli kami. Mohon tunggu
        sebentar ya! Atau{" "}
        <a
          href="https://wa.me/6281399710085"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          hubungi kami langsung di WhatsApp
        </a>
        . ⏰
      </>,
      <>
        Untuk pertanyaan spesifik ini, lebih baik kita diskusikan langsung.
        Silakan{" "}
        <a
          href="https://wa.me/6281399710085"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          hubungi tim kami via WhatsApp
        </a>
        ! 💬
      </>,
    ];

    return fallbackResponses[
      Math.floor(Math.random() * fallbackResponses.length)
    ];
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-[#253994] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition"
        >
          <MessageCircle size={24} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        </button>
      )}

      {isOpen && (
        <div
          className={`bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden ${
            isMinimized ? "w-80 h-16" : "w-96 h-[600px] max-h-[80vh]"
          }`}
        >
          <div className="bg-[#253994] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white text-[#253994] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Asisten Valpro</h3>
                <p className="text-xs text-blue-100">Online • Siap membantu</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-gray-200 rounded-lg hover:text-black mr-2"
              >
                {isMinimized ? (
                  <Maximize2 size={20} />
                ) : (
                  <Minimize2 size={20} />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-500 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-end gap-2 max-w-[85%] ${
                        msg.from === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.from === "user"
                            ? "bg-[#253994] text-white"
                            : "bg-white border border-gray-300 text-[#253994]"
                        }`}
                      >
                        {msg.from === "user" ? (
                          <User size={16} />
                        ) : (
                          <Bot size={16} />
                        )}
                      </div>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm ${
                          msg.from === "user"
                            ? "bg-[#253994] text-white rounded-br-md"
                            : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                        <div className="mt-2 text-xs flex items-center gap-1 text-gray-400">
                          <Clock size={10} />
                          <span>{formatTime(msg.timestamp)}</span>
                          {msg.from === "user" && <CheckCircle size={10} />}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#253994]">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {messages.length <= 1 && suggestions.length > 0 && (
                <div className="px-4 py-2 bg-white border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Sparkles size={12} /> Pertanyaan yang sering ditanyakan:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(suggestion)}
                        className="text-xs bg-gray-100 hover:bg-[#253994] hover:text-white px-3 py-2 rounded-full border border-gray-200"
                      >
                        {suggestion.length > 40
                          ? suggestion.slice(0, 40) + "..."
                          : suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Ketik pertanyaan Anda..."
                    className="flex-1 bg-transparent text-sm placeholder-gray-400 outline-none"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isTyping}
                    className={`p-2 rounded-xl ${
                      input.trim() && !isTyping
                        ? "bg-[#253994] text-white hover:bg-[#1e2d7a]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <Send size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Jika Anda memiliki pertanyaan yang tidak terjawab atau
                  ingin mendapatkan bantuan lebih lanjut, silakan{" "}
                  <a href="https://wa.me/6281399710085" target="_blank" rel="noopener noreferrer" className="text-[#253994]">hubungi kami lewat WhatsApp</a>.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
