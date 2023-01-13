import { XmenBackendApp } from './apps/xmen/backend/XmenBackendApp';

try {
  new XmenBackendApp().start().catch(handleError);
} catch (e) {
  handleError(e);
}

function handleError(e: any) {
  console.log(e);
  process.exit(1);
}
