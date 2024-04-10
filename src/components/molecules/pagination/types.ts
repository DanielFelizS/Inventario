export type PaginationProps = {
    PageCount: number,
    ActionPage: (data: { selected: number }) => void;
}