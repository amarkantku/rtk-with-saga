import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createAndAppendToBody = (id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    document.body.appendChild(element);
    return element;
};

const Portal = ({ children, id = 'portal' }) => {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let element = document.getElementById(id);
        let isCreated = false;

        /* istanbul ignore else */
        if (!element) {
            // if element is not present create and append to body
            isCreated = true;
            element = createAndAppendToBody(id);
        }
        setWrapperElement(element);

        return () => {
            /* istanbul ignore else */
            if (isCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [id]);

    if (wrapperElement === null) return null;
    return createPortal(children, wrapperElement);
};

export default Portal;
