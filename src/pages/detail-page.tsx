import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card } from "../components/card";
import { useUserStore } from "../user.store";

export const DetailPage = () => {
  const { id } = useParams();
  const userInfo = useUserStore((state) => state.getUserById(id));

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return <Card {...userInfo} />;
};
