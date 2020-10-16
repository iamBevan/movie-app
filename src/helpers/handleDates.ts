export const handleDate = (date: string | undefined) => {
    return date?.split("").splice(0, 4)
}