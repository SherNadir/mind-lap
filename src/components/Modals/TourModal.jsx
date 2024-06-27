import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "@/components/Modal";
import { ArrowRightIcon, LinesIcon } from "@/svgs/icons";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

export const TourModal = ({ lng }) => {
  const { t } = useTranslation(lng);
  const steps = [
    {
      id: "step-1",
      img: "/images/tour/tour-1.png",
      title: t("HELP_YOU_DISCOVER"),
      description: t("DREAM_CAREER"),
    },
    {
      id: "step-2",
      img: "/images/tour/tour-2.png",
      title: t("MAKE_JOB_FOCUSED_LEARNING"),
      description: t("PATHWAYS"),
    },
    {
      id: "step-3",
      img: "/images/tour/tour-3.png",
      title: t("MATCH_YOU_TO_JOBS_THAT_FIT_YOUR"),
      description: t("SKILLS"),
    },
    {
      id: "step-4",
      img: "/images/tour/tour-4.png",
      title: t("ARE_YOU_READY"),
      description: "",
    },
    {
      id: "step-5",
      img: "/images/tour/tour-5.png",
      title: t("DISCOVER_YOUR_DREAM"),
      description: "",
    },
    {
      id: "step-6",
      img: "/images/tour/tour-6.png",
      title: t("LETS_GET_STARTED"),
      description: "",
    },
    {
      id: "step-7",
      img: "/images/tour/tour-7.png",
      title: t("PERSONALIZED_GAMIFIED"),
      description: "",
    },
    // {
    //   id: "step-8",
    //   img: "/images/tour/tour-8.png",
    //   title: "Let me assist you with your career.",
    //   description: "",
    // },
  ];
  console.log("modal lng", lng);
  const { tour, setTour, tourStep, setTourStep } = useModals();
  const router = useRouter();

  const handleNext = () => {
    if (tourStep < steps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      setTour(false);
      router.push("/de/ask-ai");
    }
  };
  const handlePrev = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1);
    }
  };

  return (
    <Modal
      id="tour"
      open={tour}
      onClose={() => setTour(false)}
      title="Tutorial"
      className="!max-w-[50rem] !w-full shadow-xl"
      footerClass={"hidden"}
    >
      <div className="">
        <div className="text-center flex w-full">
          <div className="relative flex items-center w-full">
            <div className="flex h-full flex-1 min-h-[30rem] bg-primary ">
              <Image
                alt={`tour-${steps[tourStep].id}`}
                src={steps[tourStep].img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="flex  h-full flex-1 min-h-[30rem] ">
              <LinesIcon className="absolute top-0 right-0" />

              <div className="flex flex-col justify-center p-5 w-full gap-2  min-h-[31rem]">
                <p className="mt-0 mb-4 text-6xl text-dark-100 leading-[60px] flex gap-2 flex-col">
                  {steps[tourStep].title}
                  <span className="text-6xl sm:text-7xl text-primary">
                    {steps[tourStep].description}
                  </span>
                </p>
                <div
                  className={`relative cursor-pointer flex w-full flex items-center ${
                    tourStep === 0 ? "justify-end" : "justify-center"
                  }`}
                  onClick={handleNext}
                >
                  {tourStep === 0 ? (
                    <div>
                      <div className="rounded-3xl h-8 flex items-center justify-start bg-dark-700 text-primary w-20 text-sm font-bold mr-10 pl-2">
                        {t("NEXT")}
                      </div>
                      <div className="rounded-full w-10 h-10 bg-primary absolute flex items-center justify-center right-[20px] -top-[5px]">
                        <ArrowRightIcon className="text-white" />
                      </div>
                    </div>
                  ) : (
                    <Button
                      size="lg"
                      className="!w-[50%] !px-5 gap-2 !w-full !font-medium"
                      variant="primaryContained"
                      onClick={handleNext}
                    >
                      Save let&apos;s go <ArrowRightIcon />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <h3 className="text-2xl font-semibold mb-1 mt-4">
            {steps[tourStep].title}
          </h3>
          <p className="text-sm font-medium">{steps[tourStep].description}</p> */}
        </div>
      </div>
    </Modal>
  );
};
