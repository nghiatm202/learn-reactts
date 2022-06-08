import { Student } from '@/models'
import * as React from 'react'
// tsdrpfc - default export
// tsrpfc - named export

export interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  const { name, age, isHero, hobbyList } = student

  return (
    <div>
      Student: {name}, {age}, {isHero ? 'Hero đây' : 'Tôi không phải là Hero'}
      <div>
        {hobbyList.map((item) => (
          <h3>{item}</h3>
        ))}
      </div>
    </div>
  )
}
