import { registry, contextMixin } from '@/context/context';
import { UserStore } from '@/models/UserStore';

registry(UserStore, 'userStore');

export default contextMixin;