import { IconAlertHexagon } from '@tabler/icons-react'

interface FormFeedbackProps {
    message?: string;
}

export default function FormError({ message }: FormFeedbackProps) {
    if (!message) return

    return (
        <div className="bg-destructive/15 text-destructive p-3 rounded flex items-center gap-x-2 font-semibold">
            <IconAlertHexagon />
            <p> {message} </p>
        </div>
    )
}
