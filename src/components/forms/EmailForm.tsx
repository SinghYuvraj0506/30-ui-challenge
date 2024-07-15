import clsx from 'clsx';
import config from '../../libs/config';
import { FC, useState } from 'react';

type FormProps = {
    onSubmit: (value: string) => void;
};

const EmailForm: FC<FormProps> = ({ onSubmit }) => {
    const [inputData, setInputData] = useState('');

    const handleClick = () => {
        const flags = 'gm';
        const pattern = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}';
        const regexPattern = new RegExp(pattern, flags);

        if (inputData !== '' && inputData.match(regexPattern)) {
            onSubmit(inputData);
        }

        else{
          alert("Enter valid email")
        }
    };

    return (
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <input
                type="email"
                placeholder="Enter email"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className={clsx(config.forms.input01)}
                style={{ boxShadow: '0px 4px 34px 0px rgba(18, 18, 18, 0.06)' }}
            />

            <button className={clsx(config.forms.button01, config.typography.text16, 'text-white w-full sm:w-auto')} onClick={handleClick}>
                Join Now!
            </button>
        </div>
    );
};

export default EmailForm;
