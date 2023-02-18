import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';

interface Props {
  visible: boolean;
  onClose(e?: Event): void;
}

function UserMenu({ visible, onClose }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    onClose(e);
  });
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{
            duration: 0.125,
          }}
          onClick={() => onClose()}
          className="absolute top-16 bg-white w-[200px] border-gray-300 border-[1px] shadow-md rounded text-sm mobile:w-[150px]"
          ref={ref}
        >
          <div
            className="p-3 cursor-pointer hover:transition-all hover:ease-in hover:duration-100 hover:bg-slate-100 mobile:text-xs"
            onClick={() => router.push('/auth/login')}
          >
            로그인
          </div>
          <div
            className="p-3 cursor-pointer hover:transition-all hover:ease-in hover:duration-100 hover:bg-slate-100 mobile:text-xs"
            onClick={() => router.push('/auth/register')}
          >
            회원가입
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default UserMenu;
