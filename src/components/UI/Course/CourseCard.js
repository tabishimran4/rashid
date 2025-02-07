import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseCard = ({course}) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full w-full">
                <div className="flex h-full w-full">
                    <Image className="object-cover"
                        src={course.coverImage}
                        width="200"
                        height="230"
                        alt={course.title}
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-cyan-500 font-semibold">
                        {course.type}
                    </div>
                    <Link href={`/courses/${course.slug}`}
                        className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        {course.title}
                    </Link>
                    <p className="mt-2 text-gray-500">
                        {course.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard