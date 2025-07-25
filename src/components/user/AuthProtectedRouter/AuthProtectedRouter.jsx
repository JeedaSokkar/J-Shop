import React, { Component } from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";

export default function AuthProtectedRouter({ children }) {
  //اذا كان في Token المستخدم مسجل دخول
  const userToken = localStorage.getItem("userToken");

  if (userToken) {
    return <Navigate to="/" />;
    
  }


return children;
}
