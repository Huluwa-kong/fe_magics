import { Post } from 'contentlayer/generated'
import { cutString, getFormattedDate, getTimeDescription, removeMarkdown, urlEncodeTitle } from '../lib/utils'
import Link from 'next/link'
import React from 'react'

export function Cover({post}: { post: Post }) {
    //  text-justify
    return (
        <article className="flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={ post.date } className="text-gray-500">
                    { getTimeDescription(getFormattedDate(post.date)) }
                </time>
                {
                    (post.tags || []).map(tag => (
                        <span
                            key={ tag }
                            className="inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-400/70 text-slate-500 dark:border-slate-600 dark:text-slate-400"
                        >
                            { tag }
                        </span>))
                }
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={ `/post/${ urlEncodeTitle(post.title) }` }>
                        <a target="_blank">
                            <span className="absolute inset-0"/>
                            { post.title }
                        </a>
                    </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{ cutString(removeMarkdown(post.body.raw)) }</p>
            </div>
        </article>
    )
}