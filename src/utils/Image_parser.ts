export const Image_parser = (src: string) => {
    return process.env.NODE_ENV === "production" ? `/akshay-patel-portfolio/${src}` : src;
}