export type Option = {
    label: any;
    value: any
}

export type Props = {
    options: Option[],
    label: string,
    onChange: (value: Option | null) => void
}