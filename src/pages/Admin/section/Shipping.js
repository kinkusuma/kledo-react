import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BaseAdmin from "./BaseAdmin";
import Form from "../../../components/Form";
import Icon from "../../../components/Icon";

export default function Dashboard(props) {
  const [action, setAction] = useState(null);
  const [onEdit, setOnEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [shipping, setShipping] = useState({ data: [] });

  useEffect(() => {
    axios
      .get(
        `https://api.jokolodang.com/api/v1/finance/shippingComps/?search=${search}`,
        {
          headers: {
            "access-control-allow-origin": "*",
            "Content-type": "application/json",
            Authorization: `Bearer ${
              // localStorage.getItem("KLEDO_USER").data.data.data.access_token
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWJhMDg4ZS01NTg2LTRlNDEtYjhhNC1kYmFiOTMxOTlhNmUiLCJqdGkiOiI0OTdmNjk2ZjM2NGM1NzQxZWVhOGM5Yjg5OTg1YzA5OTI3ZjZhYmMyMjBmZmMyNjcxOGRiYjFjMDVkNWZjNTQ2MDQ3NjEwMDlmMmFhMWI2MSIsImlhdCI6MTY0NjQ1NDAzNC44MTg1MzIsIm5iZiI6MTY0NjQ1NDAzNC44MTg1MzYsImV4cCI6MTY3Nzk5MDAzNC44MDgxOTMsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.hAsSlAXEkSwmW7T-PGrwJ-NWGbotwrHr4DRdTrE7BP_6oshjAm_bQYNiYjx6_lcJhmBSC25P9d7ZcOWosIwxPQgZSNvip6wlmFSxKfQOmiBb4rclNNcxGO7OEFuHC6YC9XQKShlt18t2JklIbD9311HxqsSkGbo208rapviJdlJ-CZZtXIacj99JGODDG1qvg_OjjLK3QDd3j9bX0CnkYBzHonvUiPQwjBTkVXmOTrxQQda3TjvBXv4M_o3zM2T7xCLOwfCPPuYGCfApqBWDiDI_0Bx7dqqBEZltdHgtMrpddFsPxs40mo7TM8e4y0mBZBzC982J_0SpB1asRSVS9OTTcu6C0ef8zGeb-mjuxPSQJcUUOv1Qh933xe0jWEGtcDw-9N8Gse1144uAIAbuAf2xeeZR5dyd6jSsgWBK9RHclSXXgyb7PBVuzAjdrGfGAr1tQAmVBQvYaTzu0iy7EqTaEfp3T9MxdAVZa1wbmxaAup9RnSiZOu-sz3lIXOdXQAwatzUiKpX-eC8odMuXLpf4Jj3xSPn1o-lGYdZ_ysXB6SsmsK0G_D35-YDJrcDklAiDuBRL2d4yP-6Ylnl-ApbOh7S3nYS9sIOzvI5d38TxqxOJG6c0KFnthjI-2TQrdt-A_waKAXsu-bdYBOoRo9zOSTYoygsDP6Sr_m_wlz4"
            }`,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setShipping(res.data);
        }
      });
  }, [search]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addItem = (data) => {
    axios.post(
      "https://api.jokolodang.com/api/v1/finance/shippingComps",
      data,
      {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("KLEDO_USER").data.data.data.access_token
          }`,
        },
      }
    );
    setAction(null);
  };

  const editItem = (data) => {
    axios.put(
      `https://api.jokolodang.com/api/v1/finance/shippingComps/${onEdit}`,
      data,
      {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("KLEDO_USER").data.data.data.access_token
          }`,
        },
      }
    );
    setAction(null);
  };

  const removeItem = () => {
    axios.delete(
      `https://api.jokolodang.com/api/v1/finance/shippingComps/${onEdit}`,
      {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("KLEDO_USER").data.data.data.access_token
          }`,
        },
      }
    );
    setAction(null);
  };

  return (
    <BaseAdmin>
      <div className='pb-5 md:py-2 mb-5 grid grid-flow-row md:grid-flow-col gap-5 border-b border-slate-600 border-opacity-40 md:border-0 content-center'>
        <div className='place-self-start flex items-end gap-2'>
          <h2 className='font-bold text-lg'>Shipping Comps</h2>
          <button
            onClick={() => {
              setAction("add");
            }}
          >
            <Icon.Plus size='24' />
          </button>
        </div>
        <div className='place-self-start md:place-self-end'>
          <Form.Input
            type={"text"}
            placeholder={"search"}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      {action === "add" ? (
        <div className='w-64'>
          <h2 className='font-bold text-lg'>Tambah Shipping Comps</h2>
          <Form onSubmit={handleSubmit(addItem)}>
            <Form.Label>
              <p>Nama</p>
            </Form.Label>
            <Form.Input
              type={"text"}
              formHook={{
                ...register("name", {
                  required: "Nama harus tersedia",
                }),
              }}
            />
            {errors.name && (
              <div className='w-full mb-3 text-sm text-left text-red-500'>
                {errors.name.message}
              </div>
            )}
            <div className='w-full flex flex-grow gap-3 items-start justify-start'>
              <button
                className='flex-grow w-full m-3 p-1 font-bold text-white rounded-full bg-slate-600'
                onClick={() => setAction(null)}
              >
                Kembali
              </button>
              <Form.Submit>
                <p>Simpan</p>
              </Form.Submit>
            </div>
          </Form>
        </div>
      ) : action === "edit" ? (
        <div className='w-64'>
          <div className='py-5 place-self-start flex items-end gap-2'>
            <h2 className='font-bold text-lg'>Edit Shipping Comps</h2>
            <button
              onClick={() => {
                removeItem();
              }}
            >
              <div className='text-red-500'>
                <Icon.Dash size='24' />
              </div>
            </button>
          </div>
          <Form onSubmit={handleSubmit(editItem)}>
            <Form.Label>
              <p>Nama</p>
            </Form.Label>
            <Form.Input
              type={"text"}
              formHook={{
                ...register("name", {
                  required: "Nama harus tersedia",
                }),
              }}
            />
            {errors.name && (
              <div className='w-full mb-3 text-sm text-left text-red-500'>
                {errors.name.message}
              </div>
            )}
            <div className='w-full flex flex-grow gap-3 items-start justify-start'>
              <button
                className='flex-grow w-full m-3 p-1 font-bold text-white rounded-full bg-slate-600'
                onClick={() => setAction(null)}
              >
                Kembali
              </button>
              <Form.Submit>
                <p>Simpan</p>
              </Form.Submit>
            </div>
          </Form>
        </div>
      ) : (
        <table className='w-full'>
          <tr>
            <th className='w-full px-2 rounded bg-slate-300 text-left'>Nama</th>
          </tr>
          {shipping.data.map((item) => {
            return (
              <tr>
                <td className='py-1 px-2 rounded-sm hover:bg-slate-200'>
                  <button
                    onClick={() => {
                      setAction("edit");
                      setOnEdit(item.id);
                    }}
                    className='w-full h-full text-left'
                  >
                    {item.name}
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </BaseAdmin>
  );
}
