import {
  ArchiveIcon,
  CameraIcon,
  CheckIcon,
  ClockIcon,
  CodeIcon,
  ColorWheelIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  EyeOpenIcon,
  GearIcon,
  HomeIcon,
  ListBulletIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PaperPlaneIcon,
  PlusCircledIcon,
  PlusIcon,
  QuestionMarkIcon,
  RowsIcon,
  SunIcon,
  TrashIcon,
  TriangleDownIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import classnames from 'classnames';

const icons = {
  archive: ArchiveIcon,
  camera: CameraIcon,
  check: CheckIcon,
  clock: ClockIcon,
  code: CodeIcon,
  colorWheel: ColorWheelIcon,
  dotsH: DotsHorizontalIcon,
  dotsV: DotsVerticalIcon,
  eye: EyeOpenIcon,
  gear: GearIcon,
  home: HomeIcon,
  listBullet: ListBulletIcon,
  magicWand: MagicWandIcon,
  magnifyingGlass: MagnifyingGlassIcon,
  moon: MoonIcon,
  paperPlane: PaperPlaneIcon,
  plus: PlusIcon,
  plusCircle: PlusCircledIcon,
  question: QuestionMarkIcon,
  rows: RowsIcon,
  sun: SunIcon,
  trash: TrashIcon,
  triangleDown: TriangleDownIcon,
  triangleLeft: TriangleLeftIcon,
  triangleRight: TriangleRightIcon,
  update: UpdateIcon,
  x: Cross2Icon,
  empty: () => <span />,
};

export interface IconProps {
  icon: keyof typeof icons;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
  spin?: boolean;
}

export function Icon({ icon, spin, size = 'md', className }: IconProps) {
  const Component = icons[icon] ?? icons.question;
  return (
    <Component
      className={classnames(
        className,
        'text-inherit',
        size === 'md' && 'h-4 w-4',
        size === 'sm' && 'h-3.5 w-3.5',
        size === 'xs' && 'h-3 w-3',
        spin && 'animate-spin',
      )}
    />
  );
}