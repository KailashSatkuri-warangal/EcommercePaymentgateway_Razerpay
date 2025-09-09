// import React from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const Payment = () => {
//   const handlePayment = () => {
//     const options = {
//       key: "rzp_test_RFO3Jr0BuJYNvT",
//       amount: "50000",
//       currency: "INR",
//       name: "My Awesome Service",
//       description: "Payment for services",
//       prefill: {
//         name: "Satkuri Kailash",
//         email: "satkurikailash@gmail.com",
//         contact: "8309740722",
//       },
//       theme: { color: "#3399cc" },
//       handler: function (response) {
//         const transaction = {
//           Payment_ID: response.razorpay_payment_id,
//           Order_ID: response.razorpay_order_id,
//           Signature: response.razorpay_signature,
//           Card: response.card_id || "Test Card",
//           Amount: 500,
//           Currency: "INR",
//           Date: new Date().toLocaleString(),
//         };

//         let existingData = JSON.parse(localStorage.getItem("transactions") || "[]");
//         existingData.push(transaction);
//         localStorage.setItem("transactions", JSON.stringify(existingData));

//         const worksheet = XLSX.utils.json_to_sheet(existingData);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

//         const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//         saveAs(new Blob([wbout], { type: "application/octet-stream" }), "transactions.xlsx");

//         alert("Payment Successful! Transaction data saved.");
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.on("payment.failed", function (response) {
//       alert(`Payment Failed: ${response.error.description}`);
//     });
//     rzp.open();
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 shadow-lg rounded bg-white mt-10">
//       <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={handlePayment}
//       >
//         Pay ₹50000 Now
//       </button>
//     </div>
//   );
// };

// export default Payment;
import React from "react";
import axios from "axios";

const Payment = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_RFO3Jr0BuJYNvT",
      amount: "50000", // in paise = ₹500
      currency: "INR",
      name: "My Awesome Service",
      description: "Payment for services",
      prefill: {
        name: "Satkuri Kailash",
        email: "satkurikailash@gmail.com",
        contact: "8309740722",
      },
      theme: { color: "#3399cc" },
      handler: async function (response) {
        const transaction = {
          Payment_ID: response.razorpay_payment_id,
          Order_ID: response.razorpay_order_id,
          Signature: response.razorpay_signature,
          Card: response.card_id || "Test Card",
          Amount: 50000,
          Currency: "INR",
          Date: new Date().toLocaleString(),
        };

        try {
          await axios.post("http://localhost:5000/api/payments", transaction);
          alert("Payment Successful & Saved to MongoDB!");
        } catch (err) {
          alert("Error saving transaction: " + err.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", (response) => {
      alert(`Payment Failed: ${response.error.description}`);
    });
    rzp.open();
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded bg-white mt-10">
      <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handlePayment}
      >
        Pay ₹50000 Now
      </button>
    </div>
  );
};

export default Payment;