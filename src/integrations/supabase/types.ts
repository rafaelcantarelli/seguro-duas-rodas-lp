export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cotacoes_seguro: {
        Row: {
          ano: number
          bonus_apolice: string | null
          cep: string
          chassi: string
          codigo_interno: string | null
          condicao_veiculo: string
          cpf_condutor: string
          cpf_proprietario: string
          created_at: string
          data_vencimento: string | null
          email: string
          endereco: string
          estado: string
          estado_civil_condutor: string
          estado_civil_proprietario: string
          garagem_fechada: string
          id: string
          local_trabalho: string
          marca: string
          modelo: string
          nascimento_condutor: string
          nascimento_proprietario: string
          nome_condutor: string
          nome_proprietario: string
          placa: string | null
          relacao_segurador_condutor: string
          reside_menores: string
          seguradora_renovacao: string | null
          status: string
          telefone: string
          tipo_residencia: string
          tipo_seguro: string
          uso_profissional: string
        }
        Insert: {
          ano: number
          bonus_apolice?: string | null
          cep: string
          chassi: string
          codigo_interno?: string | null
          condicao_veiculo: string
          cpf_condutor: string
          cpf_proprietario: string
          created_at?: string
          data_vencimento?: string | null
          email: string
          endereco: string
          estado: string
          estado_civil_condutor: string
          estado_civil_proprietario: string
          garagem_fechada: string
          id?: string
          local_trabalho: string
          marca: string
          modelo: string
          nascimento_condutor: string
          nascimento_proprietario: string
          nome_condutor: string
          nome_proprietario: string
          placa?: string | null
          relacao_segurador_condutor: string
          reside_menores: string
          seguradora_renovacao?: string | null
          status?: string
          telefone: string
          tipo_residencia: string
          tipo_seguro: string
          uso_profissional: string
        }
        Update: {
          ano?: number
          bonus_apolice?: string | null
          cep?: string
          chassi?: string
          codigo_interno?: string | null
          condicao_veiculo?: string
          cpf_condutor?: string
          cpf_proprietario?: string
          created_at?: string
          data_vencimento?: string | null
          email?: string
          endereco?: string
          estado?: string
          estado_civil_condutor?: string
          estado_civil_proprietario?: string
          garagem_fechada?: string
          id?: string
          local_trabalho?: string
          marca?: string
          modelo?: string
          nascimento_condutor?: string
          nascimento_proprietario?: string
          nome_condutor?: string
          nome_proprietario?: string
          placa?: string | null
          relacao_segurador_condutor?: string
          reside_menores?: string
          seguradora_renovacao?: string | null
          status?: string
          telefone?: string
          tipo_residencia?: string
          tipo_seguro?: string
          uso_profissional?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
