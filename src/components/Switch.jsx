import { Switch } from '@headlessui/react'
import { useState } from 'react'

const Toggle = ({onChange, enabled}) => {

  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-stone-200 transition data-[checked]:bg-stone-400"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  )
}

export default Toggle