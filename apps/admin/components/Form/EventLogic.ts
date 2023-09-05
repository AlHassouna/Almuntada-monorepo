import {usePostEventMutation} from "@lib/system-design";
import {useState} from "react";

export const EventLogic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {mutate} = usePostEventMutation();
    const onSubmit = async (data) => {
        await mutate(data);
    };
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return {
        isOpen,
        onClose,
        onOpen,
        onSubmit,
    };

}


