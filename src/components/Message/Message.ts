import { message as AntdMessage } from 'antd'

export const Message = {
  error: {
    create: (resourceName: string) =>
      AntdMessage.error({
        style: { fontSize: '1rem' },
        content: `Falha ao criar o(a) ${resourceName}`,
      }),
    delete: (resourceName: string) =>
      AntdMessage.error({
        style: { fontSize: '1rem' },
        content: `Falha ao excluir o(a) ${resourceName}`,
      }),
    update: (resourceName: string) =>
      AntdMessage.error({
        style: { fontSize: '1rem' },
        content: `Falha ao atualizar o(a) ${resourceName}`,
      }),
  },
  success: {
    create: (resourceName: string) =>
      AntdMessage.success({
        style: { fontSize: '1rem' },
        content: `${resourceName} criado com sucesso`,
      }),
    delete: (resourceName: string) =>
      AntdMessage.success({
        style: { fontSize: '1rem' },
        content: `${resourceName} excluído com sucesso`,
      }),
    update: (resourceName: string) =>
      AntdMessage.success({
        style: { fontSize: '1rem' },
        content: `${resourceName} atualizado com sucesso`,
      }),
  },
}
