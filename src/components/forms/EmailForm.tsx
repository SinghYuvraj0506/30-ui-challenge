import clsx from 'clsx'
import config from '../../libs/config'

const EmailForm = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row items-center gap-4'>
        <input type="email" placeholder='Enter email' className={clsx(config.forms.input01,"text-white")} style={{boxShadow:"0px 4px 34px 0px rgba(18, 18, 18, 0.06)"}}/>

        <button className={clsx(config.forms.button01,config.typography.text16,"text-white w-full sm:w-auto")}>Join Now!</button>
    </div>

  )
}

export default EmailForm