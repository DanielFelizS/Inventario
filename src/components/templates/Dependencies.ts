import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import BtnAction from "../atoms/Buttons/Button.js";
import InputDoble from "../atoms/Inputs/InputCarac.js";
import FormInput from "../atoms/Inputs/InputText.js";
import api from "../../axiosData.mjs";
import SelectForm from "../atoms/Inputs/InputEstado.js";

export {
    useState, useEffect,
    Form, BtnAction, InputDoble,
    FormInput,
    api, SelectForm,
    useNavigate, useParams
}