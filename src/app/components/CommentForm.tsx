'use client'; // Ensure this is a client-side component

import React, { useState } from "react";


const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submitting the form
    setTimeout(() => {
      alert("Your comment has been submitted.");
      setName("");
      setEmail("");
      setComment("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Leave a Comment</h3>
      
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-lg"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-lg"
        />
        
        <textarea
          name="comment"
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-lg"
          rows={5}
        ></textarea>
      </div>

      <button
        type="submit"
        className={`px-6 py-2 bg-[#FF9F0D] text-white rounded-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Post Comment"}
      </button>
    </form>
  );
};

export default CommentForm;