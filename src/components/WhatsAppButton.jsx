import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918933095000" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full z-50"
      style={{
        backgroundColor: "#25D366",
        color: "white",
        padding: "14px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#1ebe5d";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#25D366";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
