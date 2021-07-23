import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
    const intl = useIntl();
    const defaultMessage = intl.formatMessage({
        id: 'app.copyright.produced',
        defaultMessage: '蚂蚁集团体验技术部出品',
    });

    return (
        <DefaultFooter
            copyright={`2020 ${defaultMessage}`}
            links={
                [
                    {
                        key: 'TwelveT',
                        title: 'TwelveT',
                        href: 'https://www.twelvet.cn',
                        blankTarget: true,
                    },
                    {
                        key: 'Github',
                        title: <GithubOutlined />,
                        href: 'https://gitee.com/twelvet/twelvet',
                        blankTarget: true,
                    },
                    {
                        key: '开发文档',
                        title: '开发文档',
                        href: 'https://www.twelvet.cn/docs',
                        blankTarget: true,
                    },
                ]}
        />
    );
};