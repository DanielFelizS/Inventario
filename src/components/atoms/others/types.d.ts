export type ParagraphProps = {
    TextParagraph: string;
    ValueParagraph: Array;
    APIUrl: string
}

export type ModalProps = {
    CloseModal: () => void,
    ModalShow: boolean,
    ModalTitle: string,
    RolChange: () => void,
    ModalValue: string,
    ModalChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}