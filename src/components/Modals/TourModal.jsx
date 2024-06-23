import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "@/components/Modal";
import { ArrowRightIcon, LinesIcon } from "@/svgs/icons";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const TourModal = ({lng}) => {
  const steps = [
    {
      id: "step-1",
      img: "/images/tour/tour-1.png",
      title: "Help you discover your",
      description: "Dream Career",
    },
    {
      id: "step-2",
      img: "/images/tour/tour-2.png",
      title: "Make job focused learning ",
      description: "pathways",
    },
    {
      id: "step-3",
      img: "/images/tour/tour-3.png",
      title: "Match you to jobs that fit your",
      description: "skills",
    },
    {
      id: "step-4",
      img: "/images/tour/tour-4.png",
      title: "Are you Ready?!",
      description: "",
    },
    {
      id: "step-5",
      img: "/images/tour/tour-5.png",
      title: "Discover Your Dream Career.",
      description: "",
    },
    {
      id: "step-6",
      img: "/images/tour/tour-6.png",
      title: "Let’s Get Started!",
      description: "",
    },
    {
      id: "step-7",
      img: "/images/tour/tour-7.png",
      title: "Personalized Gamified",
      description: "",
    },
    // {
    //   id: "step-8",
    //   img: "/images/tour/tour-8.png",
    //   title: "Let me assist you with your career.",
    //   description: "",
    // },
  ];
  console.log('modal lng', lng)
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
      footer={
        <Button
          size="lg"
          className="!w-fit !px-5 gap-2 !font-medium"
          variant="primaryContained"
          onClick={handleNext}
        >
          Save let&apos;s go <ArrowRightIcon />
        </Button>
      }
    >
      <div className="">
        {/* <div className="flex justify-between my-4">
          <Button
            variant="text"
            className="gap-2 !text-grey-400"
            onClick={handlePrev}
          >
            <ArrowRightIcon className="transform rotate-180 " /> Back
          </Button>
          <span>
            {tourStep + 1}/{steps.length}
          </span>
          <Button variant="text" className="gap-2" onClick={handleNext}>
            {tourStep < steps.length - 1 ? "Next" : "Finish"}{" "}
            <ArrowRightIcon className="" />
          </Button>
        </div> */}
        <div className="text-center flex w-full">
          <div className="relative flex items-center gap-4 w-full">
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

              <div className="flex flex-col justify-center p-5 w-full">
                <p className="mt-0 mb-4 text-6xl text-dark-100 leading-[60px] flex gap-2 flex-col">
                  {steps[tourStep].title}
                  <span className="text-6xl sm:text-7xl text-primary">
                    {steps[tourStep].description}
                  </span>
                </p>
                  <div
                    className="relative cursor-pointer flex w-11/12 flex items-center justify-end"
                    onClick={handleNext}
                  >
                    {tourStep === 0 ? <div><div className="rounded-3xl h-8 flex items-center justify-center bg-dark-700 text-primary w-20 text-sm font-bold mr-10">
                      Next
                    </div>
                    <div className="rounded-full w-10 h-10 bg-primary absolute flex items-center justify-center right-[20px] -top-[5px]">
                      <ArrowRightIcon className="text-white" />
                    </div></div> : <Button
                    size="lg"
                    className="!w-fit !px-5 gap-2 !w-full !font-medium"
                    variant="primaryContained"
                    onClick={handleNext}
                  >
                    Save let&apos;s go <ArrowRightIcon />
                  </Button>}
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
