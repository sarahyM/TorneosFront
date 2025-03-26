import className from 'classnames';
import {twMerge} from 'tailwind-merge';

function Button({disabled, children, primary, secondary, success, warning, danger, outline, rounded, nvgtbutton, marginbtm, marginTop, nocustom, bigLetter, del, edit, callToAction, ...rest}) {

    let classes = twMerge(className("items-center px-6 py-2 border font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out",{
        'border-gray-600 bg-custom-green-btn text-white tracking-wide': primary,
        'w-full border-blue-600 bg-blue-600 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded': danger,
        'bg-white tracking-8': outline,
        'rounded-full flex space-x-4': rounded,
        'text-gray-500': primary && outline,
        'text-blue-600': secondary && outline,
        'text-green-500': success && outline,
        'text-yellow-400': warning && outline,
        'text-red-500': danger && outline,
        'border-none hover:text-blue-500 block text-left px-0 py-1': nocustom,
        "bg-green-500 font-Poppins md:ml-8 hover:bg-green-600 duration-500 text-white mb-2":nvgtbutton,
        "mb-3 tracking-2 inline":marginbtm,
        "mt-4 tracking-2 inline":marginTop,
        "border-gray-200 bg-gray-300":disabled,
        "text-4xl mb-10 border-green-600":bigLetter,
        "border-none text-red-500 bg-red-100 p-2 hover:bg-red-500 hover:text-white": del,
        "border-none text-gray-500 bg-gray-100 p-2 hover:bg-gray-500 hover:text-white mr-2": edit,
        "text-2xl md:text-3xl lg:text-4xl px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3": callToAction
    }));

    return (
        <button {...rest} disabled={disabled} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkValidationProps: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + 
        Number(!!secondary) + 
        Number(!!success) + 
        Number(!!warning) + 
        Number(!!danger);

        if (count > 1) {
            throw new Error("Provide only one prop to the button")
        }
    }
}

export default Button;