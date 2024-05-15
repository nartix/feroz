## Ansible Kubespray

I have tried this in my homelab and it worked flawlessly for testing; however, for production, its deployment, upgrade and many feature options are less desirable than those of RKE2.

## RKE2

I found RKE2 to be the easiest to deploy and upgrade. It works without any preliminary setup. It is made by Rancher, a well-known company that provides support for and makes Kubernetes engines.

## Others

Honorable mentions: Kubesphere, Kubekey, K3s, RKE. I have also looked at storage solutions such as Portworkx and OpenEBS. However, I have no need for them as I was not going to deploy databases in Kubernetes for personal projects. Furthermore, I have looked at cluster backup solutions such as Velero, Stach K8 and Kasten K10 as well.

# RKE2 Kubernetes Cluster Management

## Remove all RKE2 nodes

To remove all nodes from the RKE2 cluster, use the following command:

```bash
sudo ansible-playbook ansible/playbooks/rke2/uninstall-rke2.yml
```

## Install RKE2 nodes

To install nodes in the RKE2 cluster, execute:

```bash
sudo ansible-playbook ansible/playbooks/rke2/install-rke2-cluster.yml
```

## Install a single RKE2 node

To install a single node (e.g., `node2` as the master, ensure it's in the `kube_control_plane` group):

```bash
sudo ansible-playbook ansible/playbooks/rke2/install-rke2-cluster.yml --limit node2
```

## Remove a single RKE2 node

To remove a specific node (e.g., `node2`) from the cluster, use:

```bash
sudo ansible-playbook ansible/playbooks/rke2/uninstall-rke2.yml --limit node2
```
