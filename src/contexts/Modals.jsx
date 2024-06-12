"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import { TourModal } from "@/components/Modals";

const ModalContext = createContext(false);

export const ModalsProvider = ({ children }) => {
  const [tour, setTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const value = {
    tour,
    tourStep,
    setTour: useCallback((value) => {
      return setTour(value);
    }, []),
    setTourStep: useCallback((value) => {
      return setTourStep(value);
    }, []),
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      <TourModal />
    </ModalContext.Provider>
  );
};

export const useModals = () => useContext(ModalContext);
