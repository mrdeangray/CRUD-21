import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import CreateExpense from "./CreateExpense";
import ReadExpenses from "./ReadExpenses";
import UpdateExpense from "./UpdateExpense";
import DeleteExpense from "./DeleteExpense";

const RenderRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/createexpense" element={<CreateExpense />} />
          <Route exact path="/readexpenses" element={<ReadExpenses />} />
          <Route exact path="/updateexpense/:id" element={<UpdateExpense />} />
          <Route exact path="/deleteexpense/:id" element={<DeleteExpense />} />
        </Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RenderRoutes;
