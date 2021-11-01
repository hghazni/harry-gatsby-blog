export interface CardProps {
    className?: string,
    postData: {
        title: string,
        description: string,
        date: string,
        timeToRead: Number,
        thumbnail: string,
    }
}