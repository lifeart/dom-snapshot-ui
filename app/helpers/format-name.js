import { helper } from '@ember/component/helper';

export default helper(function formatName([name]/*, hash*/) {
  const [_, dt] = name.split('-');
  return new Date(parseInt(dt.trim(), 10)).toLocaleString();
});
