import { SuseLogoSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'


export const Header = () => {
  const { projectSubtitle } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-secondary-dark text-white py-6'>
      {/* Header content */}

      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-11/12 2xl:w-3/4 items-center'>
        {/* Main Header */}
        <div className='grid gap-4'>
          <div className='flex flex-row items-center align-items-center align-middle gap-4'>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <span className='w-[120px]'> <SuseLogoSVG /></span>
            <span className='text-xl font-light text-gray-200 border-l border-gray-200 px-4 place-self-center'>{projectSubtitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
