import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <div>
      <div className="mx-1 sm:mx-40 h-1/2">
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl shadow-lg sm:h-[550px] h-[250px]"
        >
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNAqEEbuDUVa3o3M1xjg7xKcOUCovyV-hDhwTGm=s1360-w1360-h1020-rw"
            alt="image 1"
            className="h-full w-full "
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full"
          />
        </Carousel>
      </div>
    </div>
  );
}
