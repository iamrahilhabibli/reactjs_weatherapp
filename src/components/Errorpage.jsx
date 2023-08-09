import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Errorpage.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
export function ErrorPage({ errorMessage, handleBack }) {
  return (
    <div>
      <h1>{errorMessage}</h1>
      <Button colorScheme="gray" onClick={handleBack}>
        Go Back
      </Button>
    </div>
  );
}
