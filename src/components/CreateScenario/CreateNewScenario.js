import React from 'react'
import TextInput from './TextInput'
import DropdownInput from './DropdownInput'
import Checkbox from './Checkbox'
import NumberInput from './NumberInput'

const CreateNewScenario = ({ profile, allRaces, allEducationLevels, onSave, onChange, loading, errors }) => {
  return (
    <form>
      <TextInput
        name="postiion"
        label="Position"
        value={profile.position}
        onChange={onChange}
        error={errors.position}/>
      <NumberInput
        name="age"
        label="Age"
        min='13'
        max='120'
        value={profile.age}
        onChange={onChange}
        error={errors.age}/>
      <NumberInput
        name="salary"
        label="Salary"
        min='0'
        max='10000000'
        value={profile.age}
        onChange={onChange}
        error={errors.age}/>
      <DropdownInput
        name="education"
        label="Education"
        value={profile.educaiton}
        defaultOption="Select Education Level"
        options={allEducationLevels}
        onChange={onChange}
        error={errors.education}/>
      <DropdownInput
        name="race"
        label="Race"
        value={profile.race}
        defaultOption="Select Author"
        options={allRaces}
        onChange={onChange}
        error={errors.race}/>
      <TextInput
        name="marital_status"
        label="Marital Status"
        value={profile.marital_status}
        onChange={onChange}
        error={errors.marital_status}/>
      <Checkbox
        name="male"
        label="Male"
        value={profile.gender}
        onChange={onChange}
        error={errors.gender}/>
      <Checkbox
        name="female"
        label="Female"
        value={profile.gender}
        onChange={onChange}
        error={errors.gender}/>
      <Checkbox
        name="hasKids"
        label="Have Kids"
        value={profile.hasKids}
        onChange={onChange}
        error={errors.hasKids}/>
        <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="someBtnClassName"
      onClick={onSave}/>
    </form>
  )
}

export default CreateNewScenario
